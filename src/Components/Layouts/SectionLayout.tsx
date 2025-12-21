import "../../css/app-section.css";
export const SectionLayout = ({
  backgroundColor,
}: {
  backgroundColor: "tomato" | "palegreen" | "blueviolet";
}) => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor,
      }}
      className="app-section"
    ></section>
  );
};
