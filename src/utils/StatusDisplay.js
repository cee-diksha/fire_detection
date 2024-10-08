import React from 'react';

const StatusDisplay = ({ status }) => {
  let displayStatus = '';

  if (status.includes('danger') && status.includes('yellow') && status.includes('smoke')) {
    displayStatus = 'fire | smoke | low battery';
  } else if (status.includes('danger') && status.includes('smoke')) {
    displayStatus = 'fire | smoke';
  } else if (status.includes('danger') && status.includes('yellow')) {
    displayStatus = 'fire | low battery';
  } else if (status.includes('danger')) {
    displayStatus = 'fire';
  } else if (status.includes('orange') && status.includes('smoke')  && status.includes('yellow')) {
    displayStatus = 'temp ↑ | smoke | battery ↓';
  } else if (status.includes('orange') && status.includes('smoke')) {
    displayStatus = 'temp rising | smoke';
  } else if (status.includes('smoke')) {
    displayStatus = 'smoke';
  } else if (status.includes('orange') && status.includes('yellow')) {
    displayStatus = 'temp rising | low battery';
  } else if (status.includes('orange')) {
    displayStatus = 'temp rising';
  } else if (status.includes('success')) {
    displayStatus = 'normal';
  } else if (status.includes('yellow') && status.includes('fire')) {
    displayStatus = 'fire';
  } else if (status.includes('yellow')) {
    displayStatus = 'low battery';
  } else if (status.includes('success')) {
    displayStatus = 'normal';
  }else if (status.includes('deleted')) {
    displayStatus = 'needs replacement';
  } else if (status.includes('not responding')) {
    displayStatus = 'not responding';
  }

  return (
    <div>
      <p style={{textTransform: "capitalize"}}>{displayStatus}</p>
    </div>
  );
};

export default StatusDisplay;