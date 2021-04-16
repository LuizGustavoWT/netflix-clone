import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {

  const disclosure = useDisclosure();
  const {asPath} = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath])

  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);