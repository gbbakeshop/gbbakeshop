import React, { useEffect } from "react";

export default function AccountHistory2({ data }) {
  useEffect(() => {
    data.forEach((res) => {
      const message = res?.message;

      if (message && message.includes("created ")) {
        const createdIndex = message.indexOf("created ");
        const parsedJson = message.substring(createdIndex + 8);

        try {
          console.log(JSON.parse(parsedJson));
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    });
  }, [data]);
  return (
    <div className="flex-1 capitalize rounded-lg p-8">
      <h4 className="text-xl text-gray-900 font-bold">Selecta History logs</h4>
      <div className="relative px-4">
        <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
        {data.map((res, index) => (
          <div key={index}>
            <div className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
              </div>
              <div className="w-11/12">
                <div className="flex">
                  <a href="#" className="text-red-600 font-bold">
                    {res?.user?.name}
                  </a>
                  <p className="lowercase ml-3 mt-1 text-xs text-gray-500">3 min ago</p>
                </div>

                <p className="text-sm">
                  {res?.user?.name}{" "}
                  {res?.message && (
                    <>
                      {res.message.includes("created ") ? (
                        <span>
                          {(() => {
                            const createdIndex = res.message.indexOf("created ");
                            if (createdIndex !== -1) {
                              const parsedJson = res.message.substring(createdIndex + 8);
                              try {
                                return 'created '+ JSON.parse(parsedJson).map(result=>result.bread_name+' '+result.quantity)+'qty';
                              } catch (error) {
                                console.error("Error parsing JSON:", error);
                                return null;
                              }
                            }
                          })()}
                        </span>
                      ) : (
                        res.message
                      )}.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
