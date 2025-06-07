import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface IBreadcrumb {
  title: string;
  link?: string;
}

interface RouteMeta {
  breadcrumb: (location: unknown) => IBreadcrumb[];
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    if (location.state?.meta?.breadcrumb) {
      const meta = location.state.meta as RouteMeta;
      setBreadcrumbs(meta.breadcrumb(location));
    }
  }, [location]);

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-wrapper">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index} className="breadcrumbs">
            {breadcrumb.link ? (
              <Link
                to={{
                  pathname: breadcrumb.link,
                  search: location.search,
                }}
              >
                {breadcrumb.title + "/"}
              </Link>
            ) : (
              <p className="lastTitle">{breadcrumb.title}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
