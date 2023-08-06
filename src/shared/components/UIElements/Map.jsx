import { Box } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

const Map = ({ className, center, zoom }) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, [center, zoom]);

  return <Box ref={mapRef} className={`h-[50vh] ${className}`}></Box>;
};

export default Map;
