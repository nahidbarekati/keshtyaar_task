export const routesV1 = {
  public_version: '/keshtyaar/public/v1',
  private_version: '/keshtyaar/private/v1',
  api_user: {
    swagger_tag: 'Api User',
    root: '/api',
    list: '/api/list-without-Group',
  },
  api_group: {
    swagger_tag: 'Api Group',
    root: '/api/group',
  },
  api_post: {
    swagger_tag: 'Api POst',
    root: '/api/post',
  },
  health: {
    swagger_tag: 'Health',
    root: '/health',
  },
};
