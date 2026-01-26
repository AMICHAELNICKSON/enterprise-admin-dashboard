export const navLinkClass = ({isActive}: {isActive: boolean}) => 
    `nav-link ${isActive ? "fw-bold text-primary" : ""}`