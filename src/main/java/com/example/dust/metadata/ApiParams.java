package com.example.dust.metadata;

public class ApiParams {
  public static final String FORECAST_SERVICE_KEY = "ServiceKey=" + ApiKey.FORECAST_KEY;
  public static final String STATION_SERVICE_KEY = "ServiceKey=" + ApiKey.STATION_SEARCH_KEY;

  public static final String RETURN_TYPE_JSON = "_returnType=json";
  public static final String NUM_OF_ROWS = "numOfRows=25";
  public static final String PAGE_NO = "pageNo=1";

  //대기예보
  public static final String SEARCH_DATE = "searchDate=";
  public static final String INFORM_CODE = "InformCode=PM10";

  //좌표변환
  public static final String X = "x=";
  public static final String Y = "y=";
  public static final String INPUT_COORDINATION = "input_coord=WGS84";
  public static final String OUTPUT_COORDINATION = "output_coord=TM";

  //측정소
  public static final String TM_X = "tmX=";
  public static final String TM_Y = "tmY=";

  //미세먼지
  public static final String STATION_NAME = "stationName=";
  public static final String DATA_TERM = "dataTerm=DAILY";
  public static final String VERSION = "ver=1.3";
}
