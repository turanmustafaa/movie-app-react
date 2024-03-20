import React from "react";
import { useAppContext } from "../../context/app-context";
import { IMovie } from "../../types/movie.ts";

export default function ModalsContainer({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { modal, handleModal } = useAppContext();
  return (
    <div
      onClick={() => handleModal({ name: null, data: {} as IMovie })}
      className={`fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 transition-all duration-200 px-2
    flex items-center justify-center z-[999]
    ${
      name && modal.name
        ? "opacity-100 visible"
        : "opacity-0 invisible delay-200"
    }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full md:w-2/3 h-[75vh] md:h-[60vh] border-2 border-gray-400 border-opacity-40 bg-gray-900 rounded-md transition-all duration-200 
    ${
      name && modal.name === name
        ? "translate-y-0 opacity-100 delay-200"
        : "-translate-y-4 opacity-0"
    }
    `}
      >
        <span
          onClick={() => handleModal({ name: null, data: {} as IMovie })}
          className="absolute top-0 right-0 m-2 w-6 md:w-10 aspect-square cursor-pointer rounded-full bg-blue-700 bg-opacity-0 hover:bg-opacity-30  p-1"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M6 19.7C5.7 19.7 5.5 19.6 5.3 19.4C4.9 19 4.9 18.4 5.3 18L18 5.3C18.4 4.9 19 4.9 19.4 5.3C19.8 5.7 19.8 6.29999 19.4 6.69999L6.7 19.4C6.5 19.6 6.3 19.7 6 19.7Z"
              fill="#fff"
            />
            <path
              d="M18.8 19.7C18.5 19.7 18.3 19.6 18.1 19.4L5.40001 6.69999C5.00001 6.29999 5.00001 5.7 5.40001 5.3C5.80001 4.9 6.40001 4.9 6.80001 5.3L19.5 18C19.9 18.4 19.9 19 19.5 19.4C19.3 19.6 19 19.7 18.8 19.7Z"
              fill="#fff"
            />
          </svg>
        </span>
        {children}
      </div>
    </div>
  );
}
