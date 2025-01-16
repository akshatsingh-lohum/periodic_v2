import PeriodicTable from "@/components/PeriodicTable";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-2/3 h-[calc(100vh-8rem)] relative">
        {" "}
        {/* Added relative positioning */}
        <div className="absolute inset-0">
          {" "}
          {/* Added absolute positioning */}
          <PeriodicTable />
        </div>
      </div>
    </div>
  );
}
