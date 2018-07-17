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
  
  func addMarker() {
    
  }
}


class IGNMapsView: UIView {
 
  var mapView: GMSMapView = {
    let view = GMSMapView(frame: .zero)
    view.camera = GMSCameraPosition.camera(withLatitude: 51.050657, longitude: 10.649514, zoom: 5.5)
    view.translatesAutoresizingMaskIntoConstraints = false
    
    return view
  }()
  
  var onNgapain: RCTDirectEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.frame = self.bounds
    self.addSubview(mapView)
    
    NSLayoutConstraint.activate([
        mapView.leftAnchor.constraint(equalTo: self.leftAnchor),
        mapView.rightAnchor.constraint(equalTo: self.rightAnchor),
        mapView.topAnchor.constraint(equalTo: self.topAnchor),
        mapView.bottomAnchor.constraint(equalTo: self.bottomAnchor)
    ])
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}
