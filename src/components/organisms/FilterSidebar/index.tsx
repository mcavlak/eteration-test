import { Grid } from "@mui/material";
import React from "react";
import OptionFilter from "../../molecules/OptionFilter";
import SelectFilter from "../../molecules/SelectFilter";
import { Product } from "../../../types/Product";
import {
  FilterState,
  changeBrand,
  changeModel,
  changeSort,
} from "../../../redux/slices/filter";
import { useAppDispatch } from "../../../redux/store";

interface Props {
  products: Product[];
  filterData: FilterState;
}

function FilterSidebar({ products, filterData }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Grid component="aside" container spacing={4}>
      <Grid item xs={12}>
        <OptionFilter
          title="Sort By"
          onChange={(e) => {
            dispatch(changeSort(e.target.value));
          }}
          options={[
            "Old to new",
            "New to old",
            "Price hight to low",
            "Price low to High",
          ]}
          value={filterData.sort}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectFilter
          title="Brands"
          onChange={(e) => {
            dispatch(changeBrand(e.target.name));
          }}
          options={products
            .filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.brand === value.brand)
            )
            .map((v) => v.brand)}
          checked={filterData.brand}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectFilter
          title="Model"
          onChange={(e) => {
            dispatch(changeModel(e.target.name));
          }}
          options={products
            .filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.model === value.model)
            )
            .map((v) => v.model)}
          checked={filterData.model}
        />
      </Grid>
    </Grid>
  );
}

export default FilterSidebar;
