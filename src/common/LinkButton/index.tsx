import { StyledLink } from "./styles";
import { LinkButtonProps } from "../types";

export const LinkButton = ({
    color,
    fixedWidth,
    children,
    target,
    href
}: LinkButtonProps) => (
 <StyledLink color={color} href={href} target={target}>
    {children}
 </StyledLink>
)