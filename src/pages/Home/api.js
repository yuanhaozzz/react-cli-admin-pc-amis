import ApiUrl from "src/api/apiUrl";
import api from "src/api";
const { get } = api({ baseURL: ApiUrl.root });

export const getList = () => {
  return get(
    "/web/guild/guild_list?size=10&page=1&status=1&user_id=1315057&sid=01FwDDckUClfTd9ln43NRHodAoCTdAYUqyyQT9i26MwJmjvaojNhfrv5WuSGwi3i3&cv=silian2.0.0_web&system_id=3&source=outer"
  );
};
