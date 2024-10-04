export const reduceDeckData = (deckData, deviceInfo) => {
  const reducedData = deckData.reduce((acc, curr) => {
    const existingDeck = acc.find(item => item.deck === curr.deck);

    const hasDanger = [];
    const hasOrange = [];
    const hasYellow = [];
    const hasSuccess = [];
    const hasDeleted = [];
    const hasSmoke = [];

    curr.devices.forEach(device => {
      const compartments = device.node_info.map(item => ({
        node: item.node,
        status: item.status,
        comp: device.comp 
      }));

      console.log(compartments, "compartments")

      compartments.forEach(compartment => {
        if (compartment.status.includes("danger")) {
          hasDanger.push(compartment.comp);
        } else if (compartment.status.includes("orange")) {
          hasOrange.push(compartment.comp);
        } else if (compartment.status.includes("smoke")) {
          hasSmoke.push(compartment.comp);
        } else if (compartment.status.includes("yellow")) {
          hasYellow.push(compartment.comp);
        } else if (compartment.status.includes("deleted")) {
          hasDeleted.push(compartment.comp);
        } else if (compartment.status.includes("success")) {
          hasSuccess.push(compartment.comp);
        } 
      });
    });

    console.log(existingDeck, "existingDeck")
    if (existingDeck) {
      existingDeck.danger = [...(existingDeck.danger || []), ...hasDanger];
      existingDeck.normal = [...(existingDeck.normal || []), ...hasSuccess];
      existingDeck.temprise = [...(existingDeck.temprise || []), ...hasOrange];
      existingDeck.lowbattery = [...(existingDeck.lowbattery || []), ...hasYellow];
      existingDeck.smoke = [...(existingDeck.smoke || []), ...hasSmoke];
      existingDeck.deleted = [...(existingDeck.deleted || []), ...hasDeleted];
    } else {
      const newDeck = {
        deck: curr.deck,
        danger: hasDanger || [], 
        normal: hasSuccess || [],
        temprise: hasOrange || [],
        lowbattery: hasYellow || [],
        deleted: hasDeleted || [],
        smoke: hasSmoke || []
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
