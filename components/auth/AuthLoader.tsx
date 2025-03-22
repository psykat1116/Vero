import Image from "next/image";

const AuthLoader = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default AuthLoader;
