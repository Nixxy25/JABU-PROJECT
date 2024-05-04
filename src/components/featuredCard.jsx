import featuredImage from "../assets/blog-21.jpg";
import featuredLogo from "../assets/grid.png"
const FeaturedCard = () => {
  return (
    <div>
    <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1">
            
        
    <div className="bg-white rounded-lg p-2 flex flex-col gap-5">
        <div>
            <img alt="featuredImage" src={featuredImage}></img>
        </div>

        <div className="flex ml-4 gap-4">
            <img alt="featuredLogo" src={featuredLogo}></img>
            <p>University Of London</p>
        </div>

        <div className="font-bold text-lg mx-4 border-b border-gray-300 pb-8">The Complete JavaScript Course From Zero to Expert!</div>

        <div className="flex justify-between mx-4">
            <div className="flex gap-4 items-center text-gray-500">
                <div className="flex items-center gap-2">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    <p>23</p>
                </div>

                <div className="flex items-center gap-2">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                    <p>50</p>
                </div>
            </div>

            <div className="flex items-center gap-2 font-bold">
                <div className="text-gray-500">$130</div>
                <div className="text-blue-600">$86</div>
            </div>
        </div>

        
    </div>

    <div className="bg-white rounded-lg p-2 flex flex-col gap-5">
        <div>
            <img alt="featuredImage" src={featuredImage}></img>
        </div>

        <div className="flex ml-4 gap-4">
            <img alt="featuredLogo" src={featuredLogo}></img>
            <p>University Of London</p>
        </div>

        <div className="font-bold text-lg mx-4 border-b border-gray-300 pb-8">The Complete JavaScript Course From Zero to Expert!</div>

        <div className="flex justify-between mx-4">
            <div className="flex gap-4 items-center text-gray-500">
                <div className="flex items-center gap-2">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    <p>23</p>
                </div>

                <div className="flex items-center gap-2">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                    <p>50</p>
                </div>
            </div>

            <div className="flex items-center gap-2 font-bold">
                <div className="text-gray-500">$130</div>
                <div className="text-blue-600">$86</div>
            </div>
        </div>

        
    </div>

    <div className="bg-white rounded-lg p-2 flex flex-col gap-5">
    <div>
        <img alt="featuredImage" src={featuredImage}></img>
    </div>

    <div className="flex ml-4 gap-4">
        <img alt="featuredLogo" src={featuredLogo}></img>
        <p>University Of London</p>
    </div>

    <div className="font-bold text-lg mx-4 border-b border-gray-300 pb-8">The Complete JavaScript Course From Zero to Expert!</div>

    <div className="flex justify-between mx-4">
        <div className="flex gap-4 items-center text-gray-500">
            <div className="flex items-center gap-2">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                <p>23</p>
            </div>

            <div className="flex items-center gap-2">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                <p>50</p>
            </div>
        </div>

        <div className="flex items-center gap-2 font-bold">
            <div className="text-gray-500">$130</div>
            <div className="text-blue-600">$86</div>
        </div>
    </div>

    
</div>


<div className="bg-white rounded-lg p-2 flex flex-col gap-5">
<div>
    <img alt="featuredImage" src={featuredImage}></img>
</div>

<div className="flex ml-4 gap-4">
    <img alt="featuredLogo" src={featuredLogo}></img>
    <p>University Of London</p>
</div>

<div className="font-bold text-lg mx-4 border-b border-gray-300 pb-8">The Complete JavaScript Course From Zero to Expert!</div>

<div className="flex justify-between mx-4">
    <div className="flex gap-4 items-center text-gray-500">
        <div className="flex items-center gap-2">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <p>23</p>
        </div>

        <div className="flex items-center gap-2">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
            <p>50</p>
        </div>
    </div>

    <div className="flex items-center gap-2 font-bold">
        <div className="text-gray-500">$130</div>
        <div className="text-blue-600">$86</div>
    </div>
</div>


</div>

<div className="bg-white rounded-lg p-2 flex flex-col gap-5">
<div>
    <img alt="featuredImage" src={featuredImage}></img>
</div>

<div className="flex ml-4 gap-4">
    <img alt="featuredLogo" src={featuredLogo}></img>
    <p>University Of London</p>
</div>

<div className="font-bold text-lg mx-4 border-b border-gray-300 pb-8">The Complete JavaScript Course From Zero to Expert!</div>

<div className="flex justify-between mx-4">
    <div className="flex gap-4 items-center text-gray-500">
        <div className="flex items-center gap-2">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <p>23</p>
        </div>

        <div className="flex items-center gap-2">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
            <p>50</p>
        </div>
    </div>

    <div className="flex items-center gap-2 font-bold">
        <div className="text-gray-500">$130</div>
        <div className="text-blue-600">$86</div>
    </div>
</div>


</div>

    <div className="bg-white rounded-lg p-2 flex flex-col gap-5">
        <div>
            <img alt="featuredImage" src={featuredImage}></img>
        </div>

        <div className="flex ml-4 gap-4">
            <img alt="featuredLogo" src={featuredLogo}></img>
            <p>University Of London</p>
        </div>

        <div className="font-bold text-lg mx-4 border-b border-gray-300 pb-8">The Complete JavaScript Course From Zero to Expert!</div>

        <div className="flex justify-between mx-4">
            <div className="flex gap-4 items-center text-gray-500">
                <div className="flex items-center gap-2">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    <p>23</p>
                </div>

                <div className="flex items-center gap-2">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                    <p>50</p>
                </div>
            </div>

            <div className="flex items-center gap-2 font-bold">
                <div className="text-gray-500">$130</div>
                <div className="text-blue-600">$86</div>
            </div>
        </div>

        
    </div>
</div>
    </div>
  )
}

export default FeaturedCard;