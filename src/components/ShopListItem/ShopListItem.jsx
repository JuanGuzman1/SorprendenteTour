import React from "react";
import { formatCurrency } from "../../utils/hooks";
import CloseIcon from "@mui/icons-material/Close";

function ShopListItem({ item }) {
  return (
    <div className="flex justify-between bg-white p-2 m-2 items-center">
      <div>
        {/* image */}
        <img src="assets/logo.png" class="ml-4 h-20" alt="Sorprendente Tour" />
      </div>
      <div>
        {/* description */}
        <h1 className="pb-3 text-xl font-medium">{item?.name}</h1>
        <p className="text-sm">No. Personas: {item?.numPeople}</p>
        <p className="text-sm">Con desayuno: {item?.breakfast}</p>
      </div>
      <div>
        {/* price */}
        <h2 className="text-xl text-primary font-medium">
          ${formatCurrency(item?.price)}
        </h2>
      </div>
      <button>
        <CloseIcon />
      </button>
    </div>
  );
}

export default ShopListItem;
