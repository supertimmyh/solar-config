import React, { useEffect } from 'react';

const SolarPanelsWidget = ({ apiKeyOrProxyUrl = "AIzaSyDWpDVPDZiqa3z7aPyWvuCGm4dTdPYZGVQ" }) => {
  useEffect(() => {
    const loadWidget = async () => {
      const element = document.getElementById("solar-panels-container");

      if (element) {
        const script = document.createElement('script');
        script.src = "https://nora-soderlund.github.io/google-maps-solar-api-panels-demo/public/scripts/client.js";
        script.type = "module";
        script.defer = true;

        script.onload = () => {
          new window.SolarPanelsMap(apiKeyOrProxyUrl, element);
        };

        document.body.appendChild(script);
      }
    };

    loadWidget();
  }, [apiKeyOrProxyUrl]);

  return (
    <div>
      <div id="solar-panels-container" style={{ height: '100%' }}></div>
    </div>
  );
};

export default SolarPanelsWidget;
