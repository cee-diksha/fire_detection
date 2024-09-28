export const reduceDeckData = (deckData, deviceInfo) => {
  const reducedData = deckData.reduce((acc, curr) => {
    const existingDeck = acc.find(item => item.deck === curr.deck);

    const hasDanger = [];
    const hasOrange = [];
    const hasYellow = [];
    const hasSuccess = [];

    curr.devices.forEach(device => {
      const compartments = device.node_info.map(item => ({
        node: item.node,
        status: item.status,
        comp: device.comp 
      }));

      compartments.forEach(compartment => {
        if (compartment.status.includes("danger")) {
          hasDanger.push(compartment.comp);
        } else if (compartment.status.includes("orange")) {
          hasOrange.push(compartment.comp);
        } else if (compartment.status.includes("yellow")) {
          hasYellow.push(compartment.comp);
        } else if (compartment.status.includes("success")) {
          hasSuccess.push(compartment.comp);
        }
      });
    });

    if (existingDeck) {
      existingDeck.danger = [...(existingDeck.danger || []), ...hasDanger];
      existingDeck.normal = [...(existingDeck.normal || []), ...hasSuccess];
      existingDeck.temprise = [...(existingDeck.temprise || []), ...hasOrange];
      existingDeck.lowbattery = [...(existingDeck.lowbattery || []), ...hasYellow];
    } else {
      const newDeck = {
        deck: curr.deck,
        danger: hasDanger || [], 
        normal: hasSuccess || [],
        temprise: hasOrange || [],
        lowbattery: hasYellow || [],
      };

      if (hasDanger.length > 0) {
        acc.unshift(newDeck); 
      } else {
        acc.push(newDeck); 
      }
    }

    return acc;
  }, []);

  return {
    filteredDeckInfo: reducedData,
    cardData: deviceInfo
  };
};
