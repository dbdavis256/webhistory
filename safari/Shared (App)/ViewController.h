//
//  ViewController.h
//  Shared (App)
//
//  Created by David Davis on 10/22/25.
//

#import <TargetConditionals.h>

#if TARGET_OS_IOS

#import <UIKit/UIKit.h>

typedef UIViewController PlatformViewController;

#elif TARGET_OS_OSX

#import <Cocoa/Cocoa.h>

typedef NSViewController PlatformViewController;

#endif

@interface ViewController : PlatformViewController

@end
