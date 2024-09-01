import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="flex  justify-between">
    <div className="flex flex-col items-center justify-center  ml-7 p-7 ">
    {children}
    </div>

    <div className="hidden lg:block">
        <Image 
        src={'/sign-in.jpg'}
        width={300}
        height={300}
        alt="sign-in"
        className="min-h-screen h-screen w-full"
        />
    </div>
   </div>
  );
}
