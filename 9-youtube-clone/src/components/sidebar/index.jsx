import { Link } from "react-router-dom";
import { collapsedNavItems, expandedNavItems } from "../../utils/constants";

const Sidebar = ({ isExpanded }) => {
  // küçük sidebar
  if (!isExpanded) {
    return (
      <div className="w-20 h-[calc(100vh-56px)] sticky max-sm:hidden">
        <div className="py-3">
          {collapsedNavItems.map((item, key) => (
            <Link key={key} to={item.path} className="flex-center flex-col py-4 px-2 mx-2 rounded-lg hover:bg-gray">
              <span className="text-xl mb-2">{item.icon}</span>
              <span className="text-[10px] text-center">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // büyük sidebar
  return (
    <>
      {/* Küçük sidebar'dan büyüğüne geçince arayüzde kayma olmaması için küçük sibar ile aynı gemişlikte bir div koyduk */}
      <div className="w-20 max-sm:hidden" />

      <aside
        className={`w-60 fixed h-[calc(100vh-56px)] top-14 left-0 z-20 bg-black overflow-y-auto shadow-xl transform transition-transform duration-300 ease-in-out slide-in`}
      >
        <div className="py-3">
          {expandedNavItems.map((category, key) => (
            <div key={key} className="border-b border-gray py-4 px-3">
              {category.title && <h2 className="font-semibold mb-2">{category.title}</h2>}

              <div>
                {category.items.map((item, key) => (
                  <Link key={key} to={item.path} className="flex gap-4 items-center p-2 hover:bg-dark rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
