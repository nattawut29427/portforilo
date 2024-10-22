export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-[#0E1111]  font-body w-screen h-screen relative overflow-hidden">
        <div className="">{children}</div>
      </div>
        <p className="w-screen h-screen bg-black opacity-80 absolute "></p>
        <p className="blur-[180px] w-[300px] sm:w-[500px] lg:w-[630px] h-[300px] sm:h-[500px] lg:h-[630px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-[#00D0FF] to-[#FF007B] z-0 shadow-2xl"></p>
    </>
  );
}
