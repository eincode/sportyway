//
//  IGNMapsView.m
//  sportyway
//
//  Created by Ananta Pratama on /17Jul/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(IGNMapsViewManager, RCTViewManager)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(onNgapain, RCTDirectEventBlock)
RCT_EXTERN_METHOD(addMarker)

@end
