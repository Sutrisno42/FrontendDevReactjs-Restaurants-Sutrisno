const Card = (props) => {
    const { src, name, city, price, colorStatus, randomStatus, onClick, rating } =
      props;
  
    return (
      <>
        <div className="flex flex-col w-full gap-2 bg-white ">
          <img src={src} alt="" className="object-cover w-full h-52" />
          <h1 className="text-black">{name}</h1>
          <div className="flex">
            {[...Array(Math.ceil(rating))].map((v, i) => {
              if (Number.isInteger(rating)) {
                return (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FACE14"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FACE14"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                );
              } else {
                if (i + 1 === [...Array(Math.ceil(rating))].length) {
                  return (
                    <svg
                      key={i}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4797 3.49921C11.522 3.39605 11.594 3.30779 11.6866 3.24567C11.7792 3.18356 11.8882 3.15039 11.9997 3.15039C12.1112 3.15039 12.2201 3.18356 12.3127 3.24567C12.4053 3.30779 12.4774 3.39605 12.5197 3.49921L14.6447 8.61021C14.6844 8.70585 14.7498 8.78866 14.8336 8.84953C14.9174 8.9104 15.0164 8.94697 15.1197 8.95521L20.6377 9.39721C21.1367 9.43721 21.3387 10.0602 20.9587 10.3852L16.7547 13.9872C16.6761 14.0544 16.6176 14.1419 16.5855 14.2402C16.5534 14.3384 16.5489 14.4436 16.5727 14.5442L17.8577 19.9292C17.8835 20.0373 17.8767 20.1505 17.8382 20.2547C17.7997 20.3589 17.7312 20.4494 17.6413 20.5146C17.5514 20.5799 17.4442 20.6171 17.3332 20.6214C17.2222 20.6258 17.1124 20.5972 17.0177 20.5392L12.2927 17.6542C12.2044 17.6004 12.103 17.572 11.9997 17.572C11.8963 17.572 11.7949 17.6004 11.7067 17.6542L6.98166 20.5402C6.88692 20.5982 6.77712 20.6268 6.66612 20.6224C6.55512 20.6181 6.44791 20.5809 6.35803 20.5156C6.26815 20.4504 6.19962 20.3599 6.16111 20.2557C6.1226 20.1515 6.11584 20.0383 6.14166 19.9302L7.42666 14.5442C7.45049 14.4436 7.44611 14.3384 7.414 14.2401C7.38189 14.1418 7.3233 14.0543 7.24466 13.9872L3.04066 10.3852C2.95648 10.3128 2.89557 10.2172 2.86561 10.1102C2.83565 10.0033 2.83797 9.88996 2.87228 9.78436C2.90659 9.67876 2.97135 9.58567 3.05843 9.51678C3.1455 9.4479 3.25101 9.4063 3.36166 9.39721L8.87966 8.95521C8.98291 8.94697 9.08188 8.9104 9.16569 8.84953C9.2495 8.78866 9.31488 8.70585 9.35466 8.61021L11.4797 3.49921Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <mask
                        id="mask0_603_210"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M11.4347 3.49824C11.477 3.39507 11.5491 3.30681 11.6417 3.2447C11.7343 3.18258 11.8432 3.14941 11.9547 3.14941C12.0662 3.14941 12.1752 3.18258 12.2678 3.2447C12.3604 3.30681 12.4324 3.39507 12.4747 3.49824L14.5997 8.60924C14.6395 8.70487 14.7049 8.78768 14.7887 8.84855C14.8725 8.90942 14.9715 8.94599 15.0747 8.95424L20.5927 9.39624C21.0917 9.43624 21.2937 10.0592 20.9137 10.3842L16.7097 13.9862C16.6312 14.0534 16.5727 14.1409 16.5406 14.2392C16.5085 14.3374 16.504 14.4426 16.5277 14.5432L17.8127 19.9282C17.8386 20.0363 17.8318 20.1495 17.7933 20.2537C17.7548 20.3579 17.6863 20.4484 17.5964 20.5136C17.5065 20.5789 17.3993 20.6161 17.2883 20.6205C17.1773 20.6248 17.0675 20.5962 16.9727 20.5382L12.2477 17.6532C12.1595 17.5994 12.0581 17.571 11.9547 17.571C11.8514 17.571 11.75 17.5994 11.6617 17.6532L6.93674 20.5392C6.842 20.5972 6.73219 20.6258 6.6212 20.6215C6.5102 20.6171 6.40299 20.5799 6.31311 20.5146C6.22323 20.4494 6.1547 20.3589 6.11619 20.2547C6.07768 20.1505 6.07091 20.0373 6.09674 19.9292L7.38174 14.5432C7.40557 14.4426 7.40119 14.3374 7.36908 14.2391C7.33697 14.1409 7.27837 14.0534 7.19974 13.9862L2.99574 10.3842C2.91155 10.3118 2.85065 10.2162 2.82069 10.1093C2.79073 10.0024 2.79305 9.88898 2.82736 9.78338C2.86166 9.67779 2.92643 9.58469 3.01351 9.51581C3.10058 9.44692 3.20608 9.40532 3.31674 9.39624L8.83474 8.95424C8.93799 8.94599 9.03696 8.90942 9.12077 8.84855C9.20457 8.78768 9.26996 8.70487 9.30974 8.60924L11.4347 3.49824Z"
                          fill="#FACE14"
                          stroke="#FACE14"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </mask>
                      <g mask="url(#mask0_603_210)">
                        <rect
                          x="0.799805"
                          y="1.14941"
                          width="12"
                          height="21"
                          fill="#FACE14"
                        />
                      </g>
                    </svg>
                  );
                } else {
                  return (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FACE14"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#FACE14"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  );
                }
              }
            })}
            {[...Array(5 - Math.ceil(rating))].map((v, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>{city}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 10 10"
                >
                  <circle cx="5" cy="5" r="4" fill="black" />
                </svg>
              </span>
              <span>{price} IDR</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="4"
                  fill={colorStatus}
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
  
              <span>{randomStatus}</span>
            </div>
          </div>
  
          <button
            className="bg-[#002B56] py-2 rounded text-white"
            onClick={onClick}
          >
            LEARN MORE
          </button>
        </div>
      </>
    );
  };
  
  export default Card;