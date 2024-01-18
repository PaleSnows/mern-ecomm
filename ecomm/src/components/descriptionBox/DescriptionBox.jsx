import React from "react";

const DescriptionBox = () => {
  return (
    <div className="mx-[170px] my-[120px]">
      <div className="flex">
        <div className="flex items-center justify-center border p-3 bg-gray-100 font-bold mb-1 rounded-sm w-[135px]" >Description</div>
        <div className="flex items-center justify-center border p-3 bg-[#fbfbfb] font-bold mb-1 rounded-sm w-[135px] text-[#555]">Reviews (122)</div>
      </div>
      <div className="flex flex-col border gap-[30px] p-14 ">
        <div>
          <p>
            Welcome to our online shopping haven, where convenience meets style
            and quality reigns supreme. At Thakuri Shop, we invite you to
            explore a variety of fashionable clothes that are trendy, cool, old
            eras. Navigating our user-friendly platform is a seamless
            experience, allowing you to effortlessly discover, compare, and
            secure your favorite items with just a few clicks. Our commitment to
            excellence is reflected in the meticulously chosen products from
            trusted brands, ensuring that you receive nothing but the best.
            Benefit from exclusive deals and discounts, making your shopping
            journey even more rewarding.
          </p>
          <p>
            {" "}
            Rest easy knowing that your transactions are secure, thanks to our
            advanced encryption technologies. With swift delivery services and a
            dedicated customer support team, we're here to make your online
            shopping experience at Thakuri Shop delight from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
