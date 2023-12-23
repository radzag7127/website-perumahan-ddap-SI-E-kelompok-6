import type { FC } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  deskripsi?: string;
  innerBox?: string;
  gambar?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { gambar, children, deskripsi, innerBox, ...resprops } = props;
  return (
    <div {...resprops}>
      <div
        className={`bg-white flex items-center flex-col text-black ${innerBox}`}
      >
        {children ?? (
          <img
            src={gambar}
            className="w-full aspect-video md:aspect-square object-cover object-top"
          />
        )}
        <p className="ml-1 mt-5 self-start">{deskripsi}</p>
      </div>
    </div>
  );
};
