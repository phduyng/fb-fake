const Friends = () => {
  const A2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-[424px] rounded-lg bg-bg-2 px-4">
      <div className="flex-between ">
        <div className="flex translate-y-[12px] flex-col space-y-1">
          <span className="text-[20px] font-bold text-text-2 ">Friends</span>
          <span className="block text-[15px] font-semibold text-text-2 ">
            32 friends
          </span>
        </div>
        <span className="text-[18px] font-medium text-[#5aa7ff] ">
          See all friends
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 grid-rows-3">
        {A2.map((item) => (
          <div key={item}>
            <div className="h-[124px] w-[124px] rounded-lg bg-white"></div>
            <span className="text-[13px] font-semibold text-text-2 ">
              Photo
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
