import Image from "next/image";

type MockupPageProps = {
  src: string;
  alt: string;
};

export function MockupPage({ src, alt }: MockupPageProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f1ea",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1880}
          height={3200}
          priority
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "1880px",
          }}
        />
      </div>
    </main>
  );
}
