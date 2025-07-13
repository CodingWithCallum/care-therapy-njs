type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export default function MobileToggle({ open, setOpen }: Props) {
  return (
    <div className="flex items-center justify-end relative z-60 lg:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} className="p-3 rounded-full bg-sky-600 outline-none w-12 aspect-square flex flex-col justify-center items-center">
        <span className="sr-only">Toggle menu</span>
        <span className={`w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${open ? "translate-y-1.5 rotate-45" : ""}`}/>
        <span className={`w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${open ? "scale-x-0 opacity-0" : ""}`}/>
        <span className={`w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${open ? "-translate-y-1.5 -rotate-45" : ""}`}/>
      </button>
    </div>
  );
}