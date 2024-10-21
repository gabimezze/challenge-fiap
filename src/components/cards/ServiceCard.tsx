
interface ServiceCardProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
  }
  
  export default ServiceCard ;function ServiceCard({ imageSrc, altText, title, description }: ServiceCardProps) {
    return (
      <div className="service-card">
        <img src={imageSrc} alt={altText} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }