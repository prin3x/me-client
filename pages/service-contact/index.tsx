import React from "react";
import ServiceContactFetcher from "../../components/service-contact/ServiceContactFetcher";
import ServiceContactHero from "../../components/service-contact/ServiceContactHero";
import ServiceContactTableList from "../../components/service-contact/ServiceContactTableList";
import LayoutHOC from "../../layout/LayoutHOC";

type Props = {};

function ServiceContactPage({}: Props) {
  return (
    <LayoutHOC>
      <>
        <ServiceContactHero />
        <ServiceContactFetcher />
      </>
    </LayoutHOC>
  );
}

export default ServiceContactPage;
