import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type TheaderType = {
  [K in "globalHeader" | "localHeader"]: {
    [key: string]: {
      title: string;
      hasLogo: boolean;
      hasBack: boolean;
      isTransParent: boolean;
    };
  };
};

export const headerType = (params: Params): TheaderType => ({
  globalHeader: {
    "/login": { title: "", hasLogo: true, hasBack: false, isTransParent: false },
    "/signup": { title: "", hasLogo: false, hasBack: true, isTransParent: false },
    "/solplace-logs/new": { title: "플레이스 등록", hasLogo: false, hasBack: true, isTransParent: false },
    "/solplace-logs": { title: "플레이스", hasLogo: false, hasBack: true, isTransParent: false },
    [`/solplace-logs/${params.solplaceLogId}`]: { title: "", hasLogo: false, hasBack: true, isTransParent: true },
  },
  localHeader: {},
});
