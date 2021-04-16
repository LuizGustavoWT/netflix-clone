import { Stack } from "@chakra-ui/react";
import { 
  RiFileList2Line, 
  RiHome2Line, 
  RiPlayLine, 
  RiSlideshow3Line 
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return(
    <Stack spacing="12" align="flex-start">
      <NavSection title="Conteúdos">
        <NavLink icon={RiHome2Line}>Inicio</NavLink>
        <NavLink icon={RiSlideshow3Line}>Filmes</NavLink>
        <NavLink icon={RiSlideshow3Line}>Séries</NavLink>
        <NavLink icon={RiPlayLine}>Mais Vistos</NavLink>
        <NavLink icon={RiFileList2Line}>Minha Listas</NavLink>
      </NavSection>
    </Stack>
  )
}