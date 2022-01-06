import React, { ReactElement } from 'react';
import ActivityHero from '../../components/acitivities/ActivityHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function ActivitiesPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <ActivityHero />
      </div>
    </LayoutHOC>
  );
}

export default ActivitiesPage;
