const Intro = () => {
  return (
    <div className="flex h-[228px] w-[424px] flex-col items-center justify-evenly rounded-lg bg-bg-2">
      <span className="translate-x-4 self-start text-[20px] font-bold text-text-1">
        Intro
      </span>
      <div className="flex-center h-9 w-[392px] rounded-lg bg-bg-3">
        <span className="text-[15px] font-semibold text-text-1">
          Add Bio
        </span>
      </div>
      <div className="flex-center h-9 w-[392px] rounded-lg bg-bg-3">
        <span className="text-[15px] font-semibold text-text-1">
          Edit details
        </span>
      </div>
      <div className="flex-center h-9 w-[392px] rounded-lg bg-bg-3">
        <span className="text-[15px] font-semibold text-text-1">
          Add Featured
        </span>
      </div>
    </div>
  );
};

export default Intro;
