//
//  RNTMapManager.m
//  sportyway
//
//  Created by Ananta Pratama on /17Jul/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
