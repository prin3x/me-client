import { Image, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LayoutHOC from "../../layout/LayoutHOC";

type Props = {};

function CompanyName({}: Props) {
    const router: any = useRouter();
    const [currentCompany, setCurrentCompany] = useState('')
    const imageMapping = {
        mi: "mi-location.svg",
        mr: "mr-location.svg",
        fb: "fb-location.svg",
        my: "my-location.svg"
    }

    useEffect(() => {
        const companyName = router.query.name;
        // if(!companyName ) return router.push('/404');
        setCurrentCompany(companyName)

        return () => null
    },[router.query.name])


  return (
    <LayoutHOC>
      <>
        <Row justify="center">
          <Image
            preview={false}
            src={currentCompany ? `/assets/${imageMapping[currentCompany]}` : ''}
            width={750}
            height={750}
            alt="location"
          />
        </Row>
      </>
    </LayoutHOC>
  );
}

export default CompanyName;
