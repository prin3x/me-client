import React, { ReactElement } from 'react';
import ITClinicHero from '../../components/itclinic/ITClinicHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function ITClinic({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <ITClinicHero />
      </div>
    </LayoutHOC>
  );
}

export default ITClinic;
