export const ViewInRoom = () => {
  return (
    <div className="sticky w-full flex items-center justify-center bottom-10 z-30">
      <button className="px-3 py-2 bg-white border border-black flex items-center gap-4 hover:underline underline-offset-2">
        <svg
          width="19"
          height="23"
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_157_849)">
            <path
              d="M12.1396 3.04408C12.0602 3.04389 11.9822 3.02339 11.913 2.98455L9.50815 1.59779L7.09515 2.98996C7.04373 3.01995 6.98685 3.03948 6.9278 3.04741C6.86876 3.05535 6.80872 3.05153 6.75117 3.03618C6.69362 3.02083 6.63969 2.99425 6.59251 2.95799C6.54532 2.92172 6.50582 2.87649 6.47629 2.8249C6.41643 2.72048 6.40024 2.59676 6.43123 2.48053C6.46222 2.36429 6.5379 2.26491 6.64187 2.2039L9.28287 0.683197C9.42401 0.60202 9.59501 0.60202 9.73615 0.683197L12.3677 2.20255C12.4538 2.25281 12.5211 2.32989 12.5591 2.42193C12.5971 2.51398 12.6037 2.61592 12.578 2.71209C12.5522 2.80826 12.4955 2.89336 12.4166 2.95431C12.3377 3.01526 12.2408 3.0487 12.141 3.04949M9.50544 14.9851C9.44597 14.9853 9.38706 14.9738 9.33207 14.9512C9.27709 14.9287 9.22711 14.8955 9.185 14.8537C9.14289 14.8118 9.10948 14.7621 9.08668 14.7073C9.06389 14.6526 9.05215 14.5939 9.05215 14.5346V11.4959C9.05215 11.3762 9.09984 11.2615 9.18472 11.1769C9.2696 11.0922 9.38472 11.0447 9.50476 11.0447C9.6248 11.0447 9.73992 11.0922 9.8248 11.1769C9.90968 11.2615 9.95737 11.3762 9.95737 11.4959V14.5346C9.95737 14.6541 9.90975 14.7687 9.825 14.8532C9.74025 14.9377 9.6253 14.9851 9.50544 14.9851ZM0.453294 9.7709C0.393717 9.77108 0.334693 9.75951 0.279617 9.73687C0.224541 9.71422 0.1745 9.68094 0.132373 9.63895C0.0902457 9.59695 0.0568638 9.54706 0.0341475 9.49216C0.0114313 9.43725 -0.000171015 9.37841 8.16417e-06 9.31902V6.28167C8.16329e-06 6.22233 0.0117327 6.16356 0.0345125 6.10874C0.0572922 6.05391 0.090681 6.0041 0.132772 5.96214C0.174864 5.92018 0.224834 5.88689 0.279829 5.86418C0.334824 5.84147 0.393768 5.82978 0.453294 5.82978C0.51282 5.82978 0.571764 5.84147 0.626759 5.86418C0.681754 5.88689 0.731724 5.92018 0.773815 5.96214C0.815907 6.0041 0.849295 6.05391 0.872075 6.10874C0.894855 6.16356 0.90658 6.22233 0.90658 6.28167V9.31902C0.906759 9.37841 0.895156 9.43725 0.87244 9.49216C0.849724 9.54706 0.816342 9.59695 0.774215 9.63895C0.732088 9.68094 0.682047 9.71422 0.626971 9.73687C0.571895 9.75951 0.51287 9.77108 0.453294 9.7709ZM18.5481 9.7709C18.4885 9.77108 18.4295 9.75951 18.3744 9.73687C18.3193 9.71422 18.2693 9.68094 18.2272 9.63895C18.185 9.59695 18.1516 9.54706 18.1289 9.49216C18.1062 9.43725 18.0946 9.37841 18.0948 9.31902V6.28167C18.0948 6.162 18.1425 6.04723 18.2274 5.96262C18.3122 5.878 18.4274 5.83046 18.5474 5.83046C18.6674 5.83046 18.7826 5.878 18.8674 5.96262C18.9523 6.04723 19 6.162 19 6.28167V9.31902C19.0002 9.3783 18.9886 9.43703 18.966 9.49185C18.9434 9.54666 18.9101 9.59649 18.8681 9.63847C18.8261 9.68045 18.7763 9.71375 18.7213 9.73648C18.6664 9.7592 18.6075 9.7709 18.5481 9.7709ZM18.5481 17.162C18.4885 17.1622 18.4295 17.1506 18.3744 17.128C18.3193 17.1053 18.2693 17.0721 18.2272 17.0301C18.185 16.9881 18.1516 16.9382 18.1289 16.8833C18.1062 16.8284 18.0946 16.7695 18.0948 16.7101V13.6714C18.0948 13.5518 18.1425 13.437 18.2274 13.3524C18.3122 13.2678 18.4274 13.2202 18.5474 13.2202C18.6674 13.2202 18.7826 13.2678 18.8674 13.3524C18.9523 13.437 19 13.5518 19 13.6714V16.7101C19.0002 16.7694 18.9886 16.8281 18.966 16.883C18.9434 16.9378 18.9101 16.9876 18.8681 17.0296C18.8261 17.0716 18.7763 17.1049 18.7213 17.1276C18.6664 17.1503 18.6075 17.162 18.5481 17.162ZM0.453294 17.162C0.393603 17.1622 0.334467 17.1506 0.279302 17.1279C0.224136 17.1051 0.174035 17.0717 0.131889 17.0296C0.0897443 16.9874 0.0563908 16.9374 0.0337549 16.8823C0.0111191 16.8273 -0.000350616 16.7683 8.16417e-06 16.7088V13.6701C8.16329e-06 13.6107 0.0117327 13.552 0.0345125 13.4972C0.0572922 13.4423 0.090681 13.3925 0.132772 13.3506C0.174864 13.3086 0.224834 13.2753 0.279829 13.2526C0.334824 13.2299 0.393768 13.2182 0.453294 13.2182C0.51282 13.2182 0.571764 13.2299 0.626759 13.2526C0.681754 13.2753 0.731724 13.3086 0.773815 13.3506C0.815907 13.3925 0.849295 13.4423 0.872075 13.4972C0.894855 13.552 0.90658 13.6107 0.90658 13.6701V16.7088C0.906759 16.7682 0.895156 16.827 0.87244 16.8819C0.849724 16.9368 0.816342 16.9867 0.774215 17.0287C0.732088 17.0707 0.682047 17.104 0.626971 17.1266C0.571895 17.1493 0.51287 17.1608 0.453294 17.1607V17.162Z"
              fill="black"
            />
            <path
              d="M9.50602 4.83818C9.44656 4.83835 9.38764 4.82683 9.33266 4.80427C9.27767 4.78171 9.22769 4.74855 9.18558 4.7067C9.14347 4.66485 9.11006 4.61512 9.08726 4.56037C9.06447 4.50562 9.05273 4.44692 9.05273 4.38765V1.06888C9.05273 0.949214 9.10042 0.834448 9.1853 0.749831C9.27018 0.665213 9.3853 0.617676 9.50534 0.617676C9.62538 0.617676 9.7405 0.665213 9.82538 0.749831C9.91026 0.834448 9.95795 0.949214 9.95795 1.06888V4.38359C9.95795 4.50308 9.91033 4.61767 9.82558 4.70216C9.74083 4.78665 9.62588 4.83412 9.50602 4.83412M9.50602 22.3804C9.44656 22.3806 9.38764 22.3691 9.33266 22.3465C9.27767 22.3239 9.22769 22.2908 9.18558 22.2489C9.14347 22.2071 9.11006 22.1574 9.08726 22.1026C9.06447 22.0479 9.05273 21.9892 9.05273 21.9299V18.8912C9.05273 18.7715 9.10042 18.6567 9.1853 18.5721C9.27018 18.4875 9.3853 18.44 9.50534 18.44C9.62538 18.44 9.7405 18.4875 9.82538 18.5721C9.91026 18.6567 9.95795 18.7715 9.95795 18.8912V21.9299C9.95795 22.0494 9.91033 22.164 9.82558 22.2485C9.74083 22.3329 9.62588 22.3804 9.50602 22.3804Z"
              fill="black"
            />
            <path
              d="M9.50408 22.3804C9.4246 22.3807 9.34644 22.3602 9.27744 22.3209L6.62558 20.792C6.5324 20.7268 6.46707 20.6292 6.44244 20.5184C6.41781 20.4075 6.43566 20.2915 6.49248 20.1932C6.5493 20.0948 6.64098 20.0212 6.74949 19.9868C6.85801 19.9524 6.9755 19.9597 7.07887 20.0073L9.50408 21.4063L11.8927 20.0236C11.996 19.976 12.1135 19.9686 12.222 20.003C12.3305 20.0374 12.4222 20.111 12.479 20.2094C12.5359 20.3078 12.5537 20.4238 12.5291 20.5346C12.5044 20.6454 12.4391 20.743 12.3459 20.8083L9.72665 22.3209C9.65764 22.3602 9.57948 22.3807 9.50001 22.3804M9.50408 11.9465C9.4246 11.9468 9.34644 11.9263 9.27744 11.887L6.63779 10.3676C6.54461 10.3024 6.47928 10.2048 6.45465 10.0939C6.43002 9.98313 6.44787 9.86713 6.50469 9.76876C6.56152 9.67039 6.6532 9.59678 6.76171 9.56239C6.87022 9.528 6.98771 9.53533 7.09108 9.58293L9.50408 10.9724L11.9089 9.58157C12.0123 9.53397 12.1298 9.52665 12.2383 9.56104C12.3468 9.59543 12.4385 9.66904 12.4953 9.76741C12.5521 9.86577 12.57 9.98177 12.5454 10.0926C12.5207 10.2034 12.4554 10.301 12.3622 10.3663L9.73072 11.8883C9.66185 11.9281 9.58368 11.9491 9.50408 11.9492V11.9465ZM15.9084 8.25299C15.8086 8.25219 15.7118 8.21876 15.6328 8.1578C15.5539 8.09685 15.4972 8.01176 15.4715 7.91559C15.4457 7.81941 15.4524 7.71748 15.4904 7.62543C15.5284 7.53338 15.5956 7.45631 15.6818 7.40605L18.3174 5.88669C18.4213 5.8332 18.5419 5.82169 18.6541 5.85457C18.7664 5.88745 18.8616 5.96219 18.9199 6.06324C18.9783 6.16429 18.9954 6.28388 18.9676 6.39714C18.9398 6.51041 18.8692 6.60864 18.7707 6.6714L16.1351 8.19075C16.066 8.23007 15.988 8.25239 15.9084 8.25299Z"
              fill="black"
            />
            <path
              d="M18.543 6.73228C18.4636 6.73209 18.3855 6.7116 18.3163 6.67275L15.6767 5.1534C15.6251 5.12383 15.5798 5.08439 15.5436 5.03734C15.5073 4.99029 15.4807 4.93655 15.4653 4.87923C15.4499 4.8219 15.4461 4.76211 15.4539 4.70329C15.4618 4.64446 15.4812 4.58777 15.5111 4.53646C15.5408 4.48501 15.5803 4.43991 15.6275 4.40374C15.6747 4.36758 15.7286 4.34107 15.7861 4.32573C15.8436 4.31039 15.9036 4.30653 15.9626 4.31437C16.0216 4.32221 16.0785 4.34159 16.13 4.3714L18.7696 5.89075C18.8551 5.9413 18.9218 6.01833 18.9593 6.1101C18.9969 6.20188 19.0033 6.30338 18.9776 6.39914C18.952 6.4949 18.8956 6.57967 18.8171 6.64055C18.7387 6.70142 18.6424 6.73506 18.543 6.73634M3.09326 8.25299C3.01361 8.25198 2.93556 8.23054 2.86662 8.19075L0.231048 6.6714C0.137867 6.60617 0.0725375 6.50854 0.047907 6.39772C0.0232766 6.28689 0.0411271 6.17089 0.0979485 6.07253C0.15477 5.97416 0.246451 5.90054 0.354963 5.86616C0.463475 5.83177 0.580966 5.83909 0.684334 5.88669L3.31991 7.40605C3.40543 7.45659 3.47204 7.53362 3.50959 7.6254C3.54715 7.71718 3.55358 7.81867 3.52791 7.91443C3.50225 8.01019 3.44589 8.09497 3.36742 8.15584C3.28895 8.21671 3.19268 8.25171 3.09326 8.25299Z"
              fill="black"
            />
            <path
              d="M0.453224 6.73219C0.373576 6.73283 0.295206 6.71222 0.226241 6.67249C0.157277 6.63276 0.100228 6.57536 0.0610101 6.50625C0.00204346 6.40172 -0.0135043 6.27831 0.0176985 6.16249C0.0489013 6.04666 0.124372 5.94763 0.227939 5.8866L2.86351 4.36996C2.91492 4.34036 2.97168 4.32115 3.03054 4.31342C3.08941 4.3057 3.14922 4.30961 3.20657 4.32494C3.26391 4.34027 3.31766 4.36671 3.36475 4.40276C3.41184 4.4388 3.45135 4.48375 3.48101 4.53502C3.54068 4.63882 3.55675 4.76193 3.52574 4.8775C3.49472 4.99307 3.41913 5.09173 3.31544 5.15196L0.679867 6.6686C0.610672 6.70745 0.532636 6.72795 0.453224 6.72813M15.9043 18.6814C15.8043 18.6821 15.7068 18.6499 15.6271 18.5897C15.5473 18.5295 15.4898 18.4447 15.4635 18.3485C15.4372 18.2523 15.4435 18.1501 15.4815 18.0578C15.5195 17.9656 15.587 17.8885 15.6736 17.8385L18.3173 16.3205C18.3687 16.2905 18.4256 16.271 18.4846 16.263C18.5437 16.2551 18.6037 16.2589 18.6613 16.2743C18.7188 16.2896 18.7728 16.3162 18.8199 16.3525C18.8671 16.3887 18.9066 16.434 18.9362 16.4855C18.9956 16.5898 19.0115 16.7132 18.9806 16.8291C18.9496 16.9451 18.8742 17.0442 18.7706 17.1052L16.1269 18.6245C16.0578 18.6638 15.9797 18.6848 15.9002 18.6854"
              fill="black"
            />
            <path
              d="M18.5484 17.1621C18.4688 17.1621 18.3906 17.141 18.3218 17.1012L15.6821 15.5819C15.5889 15.5166 15.5236 15.419 15.499 15.3082C15.4743 15.1973 15.4922 15.0813 15.549 14.983C15.6058 14.8846 15.6975 14.811 15.806 14.7766C15.9145 14.7422 16.032 14.7496 16.1354 14.7972L18.771 16.3165C18.8575 16.3664 18.9252 16.4433 18.9634 16.5354C19.0017 16.6275 19.0084 16.7296 18.9826 16.8259C18.9568 16.9221 18.8999 17.0073 18.8207 17.068C18.7414 17.1288 18.6443 17.1619 18.5443 17.1621M3.09326 18.6814C3.01373 18.6808 2.93569 18.6599 2.86662 18.6206L0.231048 17.1012C0.137867 17.036 0.0725375 16.9383 0.047907 16.8275C0.0232766 16.7167 0.0411271 16.6007 0.0979485 16.5023C0.15477 16.404 0.246451 16.3304 0.354963 16.296C0.463475 16.2616 0.580966 16.2689 0.684334 16.3165L3.31991 17.8345C3.40608 17.8848 3.47333 17.9618 3.51133 18.0539C3.54932 18.1459 3.55596 18.2479 3.53022 18.344C3.50449 18.4402 3.4478 18.5253 3.36886 18.5863C3.28993 18.6472 3.1931 18.6807 3.09326 18.6814Z"
              fill="black"
            />
            <path
              d="M0.45244 17.1621C0.372791 17.1627 0.294422 17.1421 0.225457 17.1024C0.156492 17.0626 0.0994433 17.0052 0.0602256 16.9361C0.0299566 16.8849 0.0102192 16.8282 0.00216426 16.7693C-0.00589069 16.7104 -0.00210195 16.6505 0.0133096 16.5931C0.0287211 16.5356 0.0554469 16.4818 0.0919285 16.4348C0.12841 16.3878 0.173918 16.3485 0.225797 16.3192L2.85865 14.8012C2.96202 14.7536 3.07951 14.7463 3.18803 14.7806C3.29654 14.815 3.38822 14.8886 3.44504 14.987C3.50186 15.0854 3.51971 15.2014 3.49508 15.3122C3.47045 15.423 3.40512 15.5207 3.31194 15.5859L0.677726 17.1052C0.608658 17.1446 0.530615 17.1655 0.451083 17.1661"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_157_849">
              <rect width="19" height="23" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p>VIEW IN ROOM</p>
      </button>
    </div>
  );
};
