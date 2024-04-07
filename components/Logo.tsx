export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <>
      <div className="flex flex-row items-baseline space-x-1">
        <h2 className="font-mono font-black ">TAP</h2>
        <h2 className="font-sans font-light ">
          The Transaction Authorization Protocol for public blockchains
        </h2>
      </div>
    </>
  );
}
