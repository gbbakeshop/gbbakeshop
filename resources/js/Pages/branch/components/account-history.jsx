import moment from "moment";

export default function BranchAccountHistory({ data }) {
   
    return (
        <>
            {/* <ol class="relative border-s border-gray-200  mt-5 m-3">
                {data.map((res, index) => (
                    <li key={index} class="mb-5 ms-6">
                        <span class="absolute flex items-center justify-center w-8 h-8  rounded-full -start-3  ">
                            <img
                                class="rounded-full shadow-lg"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                        </span>
                        <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <time class="-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                              {moment(res.created_at).format('LLL')}
                            </time>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                                <div className="text-lg capitalize text-black font-bold">
                                    {res.user.name}
                                </div>
                                {res.user.name}  {res.message}
                            </div>
                        </div>
                    </li>
                ))}
            </ol> */}

<div className="flex-1 capitalize rounded-lg  p-8">
      <h4 className="text-xl text-gray-900 font-bold">Production History logs</h4>
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
        </>
    );
}
