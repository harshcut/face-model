export interface reduxState {
  user: {
    data: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      entries: number;
    };
    auth: boolean;
  };
}

export interface clarifaiResponse {
  outputs: [
    {
      data: {
        regions: [
          {
            region_info: {
              bounding_box: {
                left_col: number;
                top_row: number;
                right_col: number;
                bottom_row: number;
              };
            };
          }
        ];
      };
    }
  ];
}
