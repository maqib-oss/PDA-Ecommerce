import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const fontRegular = "font-regular";

const productImages = [
  {
    id: 1,
    src: "/pdp-images/p1.png",
    alt: "Black water-resistant casual chest bag - front view",
    thumbnail: "/pdp-images/p1.png",
  },
  {
    id: 2,
    src: "/pdp-images/p2.png",
    alt: "Black water-resistant casual chest bag - side view",
    thumbnail: "/pdp-images/p2.png",
  },
];

const ProductImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const [isHovering, setIsHovering] = useState(false);

  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    // Reset position when mouse leaves
    setZoomPosition({
      x: 50,
      y: 50,
    });
  };

  return (
    <div className="flex flex-col gap-4 lg:col-span-5">
      {/* Main Image */}
      <Card className="p-0 overflow-hidden rounded-xl border-[#e3e6e8] bg-[#f5f6f7] shadow-none">
        <CardContent className="p-0">
          <div
            ref={imageContainerRef}
            className="group relative h-[420px] w-full overflow-hidden bg-[#f5f6f7] cursor-zoom-in sm:h-[540px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Product Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              draggable={false}
              className={`
                absolute inset-0
                h-full w-full
                object-contain
                select-none
                transition-transform
                duration-200
                ease-out
                ${
                  isHovering
                    ? "scale-[2]"
                    : "scale-100"
                }
              `}
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />

            {/* Subtle zoom hint */}
            <div
              className="
                pointer-events-none
                absolute
                right-4
                top-4
                rounded-full
                bg-white/90
                p-2
                opacity-0
                shadow-md
                transition-opacity
                duration-200
                group-hover:opacity-100
              "
            >
              <svg
                className="h-5 w-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 7v6M7 10h6"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
        {productImages.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => {
              setSelectedImage(image);
              setZoomPosition({
                x: 50,
                y: 50,
              });
            }}
            className={`
              relative
              h-24
              w-24
              flex-shrink-0
              overflow-hidden
              rounded-lg
              border-2
              transition-all
              duration-200
              ${
                selectedImage.id === image.id
                  ? "border-[#e86f17] shadow-md"
                  : "border-transparent hover:border-gray-300"
              }
            `}
          >
            <img
              src={image.thumbnail}
              alt={image.alt}
              draggable={false}
              className="h-full w-full object-cover"
            />

            {selectedImage.id === image.id && (
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-[#e86f17]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;