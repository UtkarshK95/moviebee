import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-96"
        src="spinner.svg"
        alt="loading..."
        width={400}
        height={400}
      />
    </div>
  );
}
