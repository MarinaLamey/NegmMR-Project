import { resourcesLinks, platformLinks, communityLinks } from "../constance";

const Footer = () => {
  return (
    <footer className= "container relative mt-20 border-t py-10   border-neutral-700/80 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
            {resourcesLinks.map((resource , index) => (
                <li key={index}>
              <a href={resource.href}  className="text-neutral-300 hover:text-white">{resource.text}</a>
                </li>
            ))}
            </ul>
            </div>
           <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
            {platformLinks.map((platform , index) => (
                <li key={index}>
              <a href={platform.href}  className="text-neutral-300 hover:text-white">{platform.text}</a>
                </li>
            ))}
            </ul>
            </div>
            <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
            {communityLinks.map((community , index) => (
                <li key={index}>
              <a href={community.href}  className="text-neutral-300 hover:text-white">{community.text}</a>
                </li>
            ))}
            </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer