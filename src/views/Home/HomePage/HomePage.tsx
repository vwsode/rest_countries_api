import { ChangeEvent, FC, useEffect, useState } from "react";
import { Search, Select } from "@components/forms";
import { Container, CountryCard } from "@components/ui";

import { useCountries, useDebounce } from "@/hooks";

import styles from "./HomePage.module.scss";
import { useSearchParams } from "react-router-dom";
import { removeEmptyFields } from "@/utils/helpers";

const selectRegionOptions = [
    {
        title: "Default",
        value: "",
    },
    {
        title: "America",
        value: "Americas",
    },
    {
        title: "Asia",
        value: "Asia",
    },
    {
        title: "Europe",
        value: "Europe",
    },
    {
        title: "Oceania",
        value: "Oceania",
    },
];

const HomePage: FC = () => {
    const { countries, getCountries, isLoading } = useCountries();
    const [searchParams, setSearchParams] = useSearchParams();

    const [regionValue, setRegionValue] = useState<string>(
        searchParams.get("region") || "",
    );
    const [searchValue, setSearchValue] = useState<string>(
        searchParams.get("q") || "",
    );
    const debouncedSearch = useDebounce(searchValue, 300);

    useEffect(() => {
        getCountries({ region: regionValue, q: searchValue });
    }, [regionValue, debouncedSearch]);

    const selectRegionHandler = (value: string): void => {
        if (value === "default") {
            setRegionValue("");
        } else {
            setRegionValue(value);
        }

        setSearchParams(
            removeEmptyFields({
                q: searchValue,
                region: value,
            }),
        );
    };

    const searchChangeHandler = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        setSearchValue(event.target.value);
        setSearchParams(
            removeEmptyFields({
                region: regionValue,
                q: event.target.value,
            }),
        );
    };

    const selectedRegion = selectRegionOptions.find(
        (item) => item.value === regionValue,
    );

    return (
        <Container>
            <div className={styles["wrapper"]}>
                <div className={styles["controls"]}>
                    <Search
                        className={styles["search"]}
                        placeholder="Search for a country..."
                        onChange={searchChangeHandler}
                    />
                    <Select
                        options={selectRegionOptions}
                        onChange={selectRegionHandler}
                        selected={selectedRegion || null}
                        className={styles["filter"]}
                        placeholder={`${
                            selectedRegion && selectedRegion.value !== ""
                                ? selectedRegion.title
                                : "Filter by Region"
                        }`}
                    />
                </div>
                {!countries.length ? (
                    <span>Nothing Found</span>
                ) : (
                    <div className={styles["cards"]}>
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            countries.map((country) => (
                                <CountryCard
                                    key={country.numericCode}
                                    link={country.id}
                                    flag={country.flag}
                                    name={country.name}
                                    population={country.population}
                                    region={country.region}
                                    capital={country.capital}
                                />
                            ))
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default HomePage;
