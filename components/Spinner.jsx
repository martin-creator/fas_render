import { GridLoader } from "react-spinners";


export function Spinner() {
  return (
    <div className="w-full flex items-center justify-center">
      <GridLoader color={"#1C243C"} speedMultiplier={2} />
    </div>
  );
}
