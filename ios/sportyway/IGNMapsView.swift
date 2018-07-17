//
//  GoogleMapsViewController.swift
//  sportyway
//
//  Created by Ananta Pratama on /17Jul/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit
import GoogleMaps

@objc(IGNMapsViewManager)
class IGNMapsViewManager: RCTViewManager {
  override func view() -> UIView! {
    return IGNMapsView()
  }
}


class IGNMapsView: UIView {

  var mapView: GMSMapView?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    mapView = GMSMapView.map(withFrame: CGRect(x: 100, y: 100, width: 200, height: 200), camera: GMSCameraPosition.camera(withLatitude: 51.050657, longitude: 10.649514, zoom: 5.5))
    self.frame = self.bounds
    self.addSubview(mapView!)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

}
