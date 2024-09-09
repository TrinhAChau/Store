import ProductCard from "./ProductCard";
import { trousers } from "../../constant";
import Carousel from "react-multi-carousel";
import { responsive } from "../../constant";

export default function Trousers({ onClick }) {
  return (
    <>
      <div className="transition-move position-relative">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlaySpeed={4000}
          infinite={true}
          autoPlay={true}
          centerMode={true}
          renderButtonGroupOutside={true}
          renderDotsOutside={true}
        >
          {trousers.map(({ id, ...item }) => (
            <ProductCard key={ id } id={id} {...item} onClick={onClick}></ProductCard>
          ))}
        </Carousel>
      </div>
    </>
  );
}
